import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const getCourseNumber = course => (
    course.id.slice(1)
  );

const Course = ({course}) => {
    return (
      <TouchableOpacity style={styles.courseButton}>
          <Text style={styles.courseText}>
            {`CS ${getCourseNumber(course)}\n${course.meets}`}
          </Text>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
    courseButton: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 60,
        minWidth: 90,
        maxWidth: 90,
        backgroundColor: '#66b0ff',
      },
      courseText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
      },
});

export default Course;