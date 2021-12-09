function HogDetails({hog}){
  return(
    <div>
      <div>Specialty: {hog.specialty}</div>
      <div>Weight: {hog.weight}</div>
      <div>Greased: {hog.greased ? "Is Greased" :"Is not Greased"}</div>
      <div>Highest Medal Achieved: {hog["highest medal achieved"]}</div>
      </div>
  )
}

export default HogDetails