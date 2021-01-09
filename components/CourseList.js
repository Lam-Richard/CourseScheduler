import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';
import { terms, getCourseTerm } from '../utils/course';

const CourseList = ({courses, view}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    return (
    <View>
    <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      <ScrollView>
        <CourseSelector courses={termCourses} view={view}></CourseSelector>
      </ScrollView>
    </View>
    )
  }

export default CourseList;
