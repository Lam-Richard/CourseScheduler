import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Course from './Course';
import { hasConflict } from '../utils/course';

const CourseSelector = ({courses, view}) => {
    const toggle = course => setSelected(selected => (
      selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));
    const [selected, setSelected] = useState([]);
    return (
        <View style={styles.courseList}>
          { 
            courses.map(course => (
              <Course key={course.id} course={course} 
                view={view}
                select={toggle}
                isDisabled={hasConflict(course, selected)}
                isSelected={selected.includes(course)}
              />
            ))
          }
        </View>
      );
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

export default CourseSelector;