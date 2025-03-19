import { student } from "./student.js";

class Classroom extends student {
    constructor() {
        this.student= [];

    }

    addStudent(name,age,grade) {
        const student = new this.student(name,age,grade);

        this.student.push(student);
    }

    filterStudentGradeAndName () {
        const student = this.student
        const filteredResult = student?.filter((student) => student?.grade > 50 && student?.name?.chartAt(0)=== student?.name?.toUppercase()
    );

    return filteredResult;


    };

    getMappedResult() {
        const student = this.student;
        const mapeResult = student?.map((student)=> ( {
            name: student?.name,
            grade: student?.grade,
        }));
        return mapeResult;
    }

}
export {Classroom}
