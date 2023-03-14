import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
    width: ${({ width }) => width - 40}px;
    height: 60px;
    margin: 5px 0;
    padding: 10px 10px
    border-radius: 10px
    background-color: ${({ theme }) => theme.itemBackground};
    font-size: 30px;
    font-weight: 600; 
    color: ${({ theme }) => theme.text};
`;

const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
  const width = Dimensions.get('window').width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
export default Input;
