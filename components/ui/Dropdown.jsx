import React from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder = 'Select',
  style,
  dropDownContainerStyle,
  textStyle,
  zIndex = 1000,
  zIndexInverse = 1000,
  ...props
}) => {
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={[styles.baseDropdown, style]}
      dropDownContainerStyle={[styles.baseDropdownContainer, dropDownContainerStyle]}
      textStyle={[styles.baseText, textStyle]}
      arrowIconStyle={styles.arrowIcon}
      tickIconStyle={styles.tickIcon}
      placeholder={placeholder}
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  baseDropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 4,
    minHeight: 36,
  },
  baseDropdownContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 4,
    maxHeight: 150,
  },
  baseText: {
    fontSize: 14,
    color: '#333',
  },
  arrowIcon: {
    width: 12,
    height: 12,
  },
  tickIcon: {
    width: 12,
    height: 12,
  },
});

export default Dropdown;