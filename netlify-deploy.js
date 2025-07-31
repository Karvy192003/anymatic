// Simple script to help with Netlify deployment
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🚀 Netlify Deployment Helper\n');

const runCommand = (command) => {
  try {
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Error executing ${command}:`, error.message);
    return false;
  }
};

const checkNetlifyCLI = () => {
  try {
    execSync('netlify --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
};

const deploy = () => {
  if (!checkNetlifyCLI()) {
    console.log('\n❌ Netlify CLI not found. Installing...');
    if (!runCommand('npm install -g netlify-cli')) {
      console.error('Failed to install Netlify CLI. Please install it manually.');
      process.exit(1);
    }
  }

  console.log('\n🔨 Building project...');
  if (!runCommand('npm run build')) {
    console.error('Build failed. Please fix the errors and try again.');
    process.exit(1);
  }

  console.log('\n📤 Deploying to Netlify...');
  rl.question('Do you want to deploy to production? (y/n): ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      runCommand('netlify deploy --prod');
    } else {
      runCommand('netlify deploy');
      console.log('\n⚠️ This was a draft deployment. To deploy to production, run: netlify deploy --prod');
    }
    rl.close();
  });
};

deploy();