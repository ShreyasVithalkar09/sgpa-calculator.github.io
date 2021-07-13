const calculate = () => {
    //  const form = document.getElementsByTagName('form')[0];
    const form = document.getElementById("myForm");
  
    const subjects = document.getElementsByName("subject");
  
    const credits = [3, 4, 4, 3, 3, 3, 2, 2, 1];
    let sum = 0,
      length = 9;
    const totalCredits = 25;
    const grades = [];
    const total = [];
  
    const doCalculation = () => {
      for (let i = 0; i < subjects.length; i++) {
        let data = subjects[i];
        let marks = data.value;
  
        if (marks >= 90) {
          grades[i] = 10;
        } else if (marks < 90 && marks >= 80) {
          grades[i] = 9;
        } else if (marks < 80 && marks >= 70) {
          grades[i] = 8;
        } else if (marks < 70 && marks >= 60) {
          grades[i] = 7;
        } else if (marks < 60 && marks >= 50) {
          grades[i] = 6;
        } else if (marks < 50 && marks >= 45) {
          grades[i] = 5;
        } else if (marks < 45 && marks >= 40) {
          grades[i] = 4;
        } else {
          grades[i] = 0;
        }
      }
  
      for (let i = 0; i < length; i++) {
        total[i] = credits[i] * grades[i];
      }
  
      for (let i = 0; i < length; i++) {
        sum = sum + total[i];
      }
  
      return sum;
    };
  
    const result = document.getElementById("result");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const sum = doCalculation();
      const sgpa = sum / totalCredits;
  
      result.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Your SGPA is: ${sgpa}</strong> 
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
     
      `;
  
      // document.getElementsById('my-inputs').reset();
      result.classList.remove("showResult");
    });
  };
  
  
  