//Used zybooks day 3-3 reading, 10.1: Document Object Model
let header = document.querySelector("header");
header.innerHTML = "<h1 style='color=white; margin-top=1vh';>Noah James</h1>";

let h2 = document.querySelector("h2");
h2.innerHTML = '<p><a aria-label="Link to Home page" href="./index.html" id="nav">Home</a></p> <p><a aria-label="Link to Resume page" href="./resume.html" id="nav">Resume</a></p> <p><a aria-label="Link to Portfolio page" href="./portfolio.html" id="nav">Portfolio</a></p>';

let footer = document.querySelector("footer");
footer.innerHTML = 'Last Updated: 09/25/2025 | <a aria-label="LinkedIn Link" href="https://www.linkedin.com/in/noah-james-b90127321/" target=”_blank”>LinkedIn</a> | <a aria-label="Handshake Link" href="https://app.joinhandshake.com/profiles/noah-james" target=”_blank”>Handshake</a>';