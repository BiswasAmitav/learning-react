function BioData(props) {
    console.table(props);
  return (
    <div className="bio-data">
      <h1>BIO DATA FOR  {props.name}</h1>

      <hr />

      <p>NAME: {props.name}</p>
      <br />
      <p>EMAIL: {props.email}</p>
      <br />
      <p>PHONE:{props.phone}4</p>
      <br />

      <div className="skills">
        <h2>Skills</h2>
        <ul>
            {props.skill.map(skill=>(
                <li>
                    {skill}
                </li>
            ))}
        </ul>
      </div>



      <div>
        <h2>Qualifications</h2>
        <ul>
                {props.qualification.map(qualification=>(
                    <li>
                        {qualification}
                    </li>
             
                ))}
        </ul>
      </div>



      <div>
        <h2>Interest Area</h2>

        <ul>
                {props.interest.map(interest=>(
                    <li>{interest}</li>
                ))}
        </ul>
      </div>

      <p>Reffrenced BY: {props.reference}</p>
    </div>
  );
}
export default BioData;
