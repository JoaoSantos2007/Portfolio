import TableElement from '../../components/TableElement'
import courses from '../../assets/jsons/courses.json'
import './Achievements.css'

const Achievements = () => {

  return (
    <main className='achievements'>
      <h1 className='achievements__title'>Achievements</h1>
      <p className="achievements__subtitle">A big list of things I’ve worked on</p>

      <table className='achievements__table'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Title</th>
            <th>School</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {courses && courses.map((course, index) => <TableElement
            key={index} 
            year={course.year}
            name={course.name}
            school={course.school}
            link={course.link}
            index={index}
          />)}
        </tbody>
      </table>
    </main>
  )
}

export default Achievements