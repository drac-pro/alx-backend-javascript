namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        public getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        public getAvailableTeacher(): string {
            if (this._teacher && this._teacher.experienceTeachingC) {
                return `Available Teacher: ${this._teacher.firstName}`;
            } else {
                return "No available teacher";
            }
        }
    }
}
