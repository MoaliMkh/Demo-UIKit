// UIKitTextInput.js

import { Ionicons } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { BORDER_COLORS, MESSAGE_COLORS } from "../configs/colors";
import textStyles from "../tokens/textStyles";
import Icon from "./Icon";

type Props = {
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  placeholder?: string;
  label?: string;
  helperText?: string;
  message?: string;
  status?: "default" | "success" | "error";
  showSearchIcon?: boolean;
  showClearIcon?: boolean;
  showEyeIcon?: boolean;
  action?: () => void;
  onClear?: () => void;
  style?: StyleProp<ViewStyle>;
} & TextInputProps;

export default function CustomTextInput({
  value,
  onChangeText,
  placeholder,
  label,
  helperText,
  message,
  status = "default",
  showSearchIcon = true,
  showClearIcon = true,
  showEyeIcon = true,
  action,
  onClear,
  style,
  ...props
}: Props) {
  return (
    <View style={[style, { direction: "rtl" }]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[styles.inputContainer, { borderColor: BORDER_COLORS[status] }]}
      >
        {showSearchIcon && (
          <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        )}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#848C94"
          {...props}
        />
        {showClearIcon && value ? (
          <TouchableOpacity onPress={onClear}>
            <Icon
              name="x-close_outlined"
              size={20}
              color="#888"
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : null}
        {showEyeIcon && value ? (
          <TouchableOpacity onPress={onClear}>
            <Icon
              name="eye_outlined"
              size={20}
              color="#888"
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : null}
        {action && value ? (
          <TouchableOpacity onPress={action}>
            <Text>اکشن</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      {helperText ? <Text style={styles.helperText}>{helperText}</Text> : null}
      {message ? (
        <Text style={[styles.message, { color: MESSAGE_COLORS[status] }]}>
          {message}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: "#222",
    fontWeight: "bold",
    textAlign: "right",
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    minHeight: 48,
  },
  input: {
    flex: 1,
    color: "#222",
    textAlign: "right",
    paddingVertical: 8,
    ...(textStyles.bodyMedium as TextStyle),
  },
  icon: {
    marginHorizontal: 4,
  },
  helperText: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
    textAlign: "right",
  },
  message: {
    fontSize: 12,
    marginTop: 2,
    textAlign: "right",
    alignSelf: "flex-start",
  },
});
