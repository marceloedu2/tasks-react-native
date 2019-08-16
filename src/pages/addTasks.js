import React, { Component } from 'react';
import {
  View,
  Modal,
  Text,
  TextInput,
  DatePickerIOS,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import commonStyles from '../commonStyles';

const initialState = {
  desc: '',
  date: new Date(),
}
