import { useState } from 'react';
import { Stack} from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import Input from "../../components/ui/Input"; 
import Dropdown from "../../components/ui/Dropdown";
import Button from "../../components/ui/Button";
import PopUpModal from "../../components/ui/modal";

const SpecializationForm = ({ onSubmit, onCancel }) => {
  const [enteredStudentID, setStudentID] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "All", value: "All" },
    { label: "Science", value: "Science" },
    { label: "Engineering", value: "Engineering" },
  ]);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');

  // Mock data for checking if student already has specialization
  const studentsWithSpecialization = ['22-12345', '22-54321', '23-11111'];

  function handleStudentInput() {
    // Validate inputs
    if (!enteredStudentID.trim()) {
      showErrorModal('Please enter Student ID');
      return;
    }

    if (!selectedSpecialization) {
      showErrorModal('Please select a specialization');
      return;
    }

    // Check if student already has specialization
    if (studentsWithSpecialization.includes(enteredStudentID)) {
      showErrorModal('You already selected Specialization!');
      return;
    }

    // If validation passes, show success modal
    showSuccessModal('SUBMITTED!');
    
    // Call parent onSubmit callback
    if (onSubmit) {
      onSubmit(enteredStudentID, selectedSpecialization);
    }
  }

  function showSuccessModal(message = 'SUBMITTED!') {
    setModalType('success');
    setModalMessage(message);
    setShowModal(true);
    
    // Auto-close success modal after 2 seconds and reset form
    setTimeout(() => {
      setShowModal(false);
      resetForm();
    }, 2000);
  }

  function showErrorModal(message) {
    setModalType('error');
    setModalMessage(message);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function resetForm() {
    setStudentID("");
    setSelectedSpecialization("");
  }

  function handleCancel() {
    resetForm();
    if (onCancel) {
      onCancel();
    }
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.headerText}>Fill up the following:</Text>
      
        <Stack.Screen options={{ title: 'Specialization Form' }} />

      {/* Student ID Field */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>STUDENT ID:</Text>
        <Input
          style={styles.textInput}
          placeholder="**-*****"
          value={enteredStudentID}
          onChangeText={setStudentID}
        />
      </View>

      {/* Specialization Dropdown */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>SELECT SPECIALIZATION:</Text>
        <Dropdown
          open={open}
          value={selectedSpecialization}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedSpecialization}
          setItems={setItems}
          placeholder="Select"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="SUBMIT"
          variant="success"
          onPress={handleStudentInput}
          style={styles.submitButton}
        />

        <Button
          title="CANCEL"
          variant="danger"
          onPress={handleCancel}
          style={styles.cancelButton}
        />
      </View>

      {/* PopUp Modal */}
      <PopUpModal
        visible={showModal}
        onClose={closeModal}
        type={modalType}
        message={modalMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 30,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  textInput: {
    height: 45,
  },
  buttonContainer: {
    marginTop: 40,
  },
  submitButton: {
    marginBottom: 15,
  },
});

export default SpecializationForm;