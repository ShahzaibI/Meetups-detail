import NewMeetupForm from "../component/meetups/NewMeetupForm";
import {useNavigate} from 'react-router-dom';

function NewMeetupPage() {
  const history = useNavigate();
  function addMeetupHandler(meetupData) {
    // Send http request in this function and send post request
    fetch(
      "https://react-getting-started-c574c-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),//convert my data to JSON file automaticaly
        headers: {
          'content-Type': 'application/json'
        }
      }
    ).then(()=>{
      history('/');
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
