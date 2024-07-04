/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import { Subjects } from './subjects/Teacher';
import { cpp } from './subjects/Cpp';
import { java } from './subjects/Java';
import { react } from './subjects/React';

const { cTeacher } = Subjects;

// Setting cTeacher as the teacher for Cpp
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Setting cTeacher as the teacher for Java
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Setting cTeacher as the teacher for React
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
