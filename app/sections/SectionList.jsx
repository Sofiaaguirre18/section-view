import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import SectionHeader from "../../components/lists/SectionHeader";
import SectionCard from "../../components/lists/SectionCard";
import Dropdown from "../../components/ui/Dropdown";

export default function SectionList() {
  const router = useRouter();

  // Filter states
  const [selectedGrade, setSelectedGrade] = useState("All");
  const [selectedStrand, setSelectedStrand] = useState("All");

  // DropDownPicker states
  const [gradeOpen, setGradeOpen] = useState(false);
  const [strandOpen, setStrandOpen] = useState(false);

  // Data for dropdowns
  const [gradeItems, setGradeItems] = useState([
    { label: "All", value: "All" },
    { label: "11", value: "Grade 11" },
    { label: "12", value: "Grade 12" },
  ]);
  const [strandItems, setStrandItems] = useState([
    { label: "All", value: "All" },
    { label: "STEM", value: "STEM" },
    { label: "ABM", value: "ABM" },
    { label: "HUMSS", value: "HUMSS" },
    { label: "GAS", value: "GAS" },
    { label: "TVL", value: "TVL" },
  ]);

  // Class section data
  const classSections = {
    am: [
      {
        id: "1",
        name: "ABM K",
        grade: "Grade 11",
        strand: "ABM",
        adviser: "Ms. Lei V. Lucman",
      },
      {
        id: "2",
        name: "GAS A",
        grade: "Grade 11",
        strand: "GAS",
        adviser: "Mr. Kyle B. Pornillos",
      },
      {
        id: "3",
        name: "ICT C",
        grade: "Grade 12",
        strand: "TVL",
        adviser: "Mr. Adrian Reapor",
      },
      {
        id: "4",
        name: "HUMMS A",
        grade: "Grade 12",
        strand: "HUMSS",
        adviser: "Ms. Nichole E. Sibucao",
      },
    ],
    pm: [
      {
        id: "5",
        name: "STEM A",
        grade: "Grade 11",
        strand: "STEM",
        adviser: "Ms. Annemony O. San Esteban",
      },
      {
        id: "6",
        name: "STEM B",
        grade: "Grade 12",
        strand: "STEM",
        adviser: "Mr. Jesse Tapan",
      },
    ],
  };

  // Filter sections based on selections
  const getFilteredSections = (sections) => {
    return sections.filter((section) => {
      const gradeMatch = selectedGrade === "All" || section.grade === selectedGrade;
      const strandMatch = selectedStrand === "All" || section.strand === selectedStrand;
      return gradeMatch && strandMatch;
    });
  };

  const filteredAMSections = getFilteredSections(classSections.am);
  const filteredPMSections = getFilteredSections(classSections.pm);

  // Section renderer
  const renderSections = (sections, title) => (
    <View style={styles.classContainer}>
      <SectionHeader title={title} />
      <View style={styles.sectionsContainer}>
        {sections.length > 0 ? (
          sections.map((section, index) => (
            <SectionCard
              key={section.id}
              section={section}
              onPress={() => router.push('/sections/details/[id]')}
              showDivider={index < sections.length - 1}
            />
          ))
        ) : (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No sections</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Header Title */}
      <Stack.Screen
        options={{
          title: "Sections ",
        }}
      />

      {/* Filter Dropdowns */}
      <View style={styles.filtersContainer}>
        <View style={styles.filterItem}>
          <Text style={styles.filterLabel}>Grade Level:</Text>
          <View style={styles.dropdownContainer}>
            <Dropdown
              open={gradeOpen}
              value={selectedGrade}
              items={gradeItems}
              setOpen={setGradeOpen}
              setValue={setSelectedGrade}
              setItems={setGradeItems}
              style={styles.dropdown}
              textStyle={styles.dropdownText}
              dropDownContainerStyle={styles.dropDownContainer}
              placeholder="All"
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>
        </View>
        <View style={styles.filterItem}>
          <Text style={styles.filterLabel}>Strand:</Text>
          <View style={styles.dropdownContainer}>
            <Dropdown
              open={strandOpen}
              value={selectedStrand}
              items={strandItems}
              setOpen={setStrandOpen}
              setValue={setSelectedStrand}
              setItems={setStrandItems}
              style={styles.dropdown}
              textStyle={styles.dropdownText}
              dropDownContainerStyle={styles.dropDownContainer}
              placeholder="Select Strand"
              zIndex={2000}
              zIndexInverse={2000}
            />
          </View>
        </View>
      </View>
      
      <ScrollView style={styles.content}>
        {/* Class Section Cards */}
        <View style={styles.mainContainer}>
          {renderSections(filteredAMSections, "AM Class")}
          {renderSections(filteredPMSections, "PM Class")}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 16,
  },
  mainContainer: {
    gap: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },

  filtersContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
  },
  dropdownContainer: {
    flex: 1,
  },
  dropdownText: {
    fontSize: 14,
    color: "#333",
  },
  dropDownContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
    maxHeight: 150,
  },
  classContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  sectionsContainer: {
    backgroundColor: "#fff",
  },

  noResults: {
    padding: 20,
    alignItems: "center",
  },
  noResultsText: {
    fontSize: 16,
    color: "#666",
  },
});