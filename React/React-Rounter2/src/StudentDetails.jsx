import { useParams } from "react-router";
function StudentDetails() {
    const students = [1,2,3,5,];
    const studentId = useParams();
    console.log(studentId)
    return(
        <div>
            {students.map((student) => {
                return <p>Student: id {student}</p>
            })}

            <h1>Student details</h1>
            <p>Student Id: {studentId.studentId}</p>
            {/* <Link to="/">Go back to home pages</Link> */}
        </div>
    ); 


}
export default StudentDetails;