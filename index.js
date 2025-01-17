document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      let courseName = courseNameInput.value; // CourseName reassigned fallback value if no input

      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }

      if (courseName.trim() === '') { 
        courseName = 'a course';
      } // Fallback to "a course" if no input
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <div>
      <h2>Certificate of Achievement</h2>
      <p>this is to certify that</p>
      <h3>${studentName}</h3>
      <p>has almost completed the</p>
      <h3>${courseName}</h3>
      <p>with legendary perseverance and world-class bad/assery for never giving up🏆</p>
      <img>
      <p>${personalMessage}</p>
      </div>
      `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.('', function () {
      
    });
  });
  