const text = "Full-stack Software Developer | Data Management Specialist";
const typingElement = document.getElementById('typing-text');
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeText, 100);
    } else {
        typingElement.innerHTML = text + '<span class="cursor">|</span>';
    }
}

window.addEventListener('load', typeText);

// terminal command history
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const commands = [
    '$ git commit -m "initial commit"',
    '$ npm install',
    '$ python main.py',
    '$ gcc program.c -o program',
    '$ docker-compose up',
    '$ git push origin main',
    '$ make build',
    '$ npm run dev',
    '$ pip install requirements.txt',
    '$ ./configure && make',
    '$ kubectl apply -f deploy.yaml',
    '$ mvn clean install',
    '$ yarn start',
    '$ go build main.go',
    '$ rustc main.rs',
    '$ node server.js',
    '$ rails server',
    '$ flutter run',
    '$ gradle build',
    '$ hire gavin.r',
    '$ git add .',
    '$ git checkout work',
    '$ hello world'
];

let commandLines = [];
const fontSize = 14;
const scrollSpeed = 0.3;

let currentY = 0;
while (currentY < canvas.height + 100) {
    const spacing = 40 + Math.random() * 60; 
    commandLines.push({
        text: commands[Math.floor(Math.random() * commands.length)],
        y: currentY,
        x: 20,
        nextSpacing: spacing
    });
    currentY += spacing;
}

function drawTerminal() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.font = fontSize + 'px "Courier New", monospace';

    for (let i = 0; i < commandLines.length; i++) {
        ctx.fillText(commandLines[i].text, commandLines[i].x, commandLines[i].y);
        commandLines[i].y += scrollSpeed;

        if (commandLines[i].y > canvas.height + 50) {
            const newSpacing = 40 + Math.random() * 60; // Random spacing for new line
            commandLines[i].y = -20;
            commandLines[i].text = commands[Math.floor(Math.random() * commands.length)];
            commandLines[i].nextSpacing = newSpacing;
        }
    }
}

setInterval(drawTerminal, 30);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    commandLines = [];
    let currentY = 0;
    while (currentY < canvas.height + 100) {
        const spacing = 40 + Math.random() * 60;
        commandLines.push({
            text: commands[Math.floor(Math.random() * commands.length)],
            y: currentY,
            x: 20,
            nextSpacing: spacing
        });
        currentY += spacing;
    }
});