import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';
import { terms, termMap, getCourseTerm } from '../utils/course';

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    return (
    <View>
    <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <ScrollView>
        <CourseSelector courses={termCourses}></CourseSelector>
      </ScrollView>
    </View>
    )
  }

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
        },
});

export default CourseList;
