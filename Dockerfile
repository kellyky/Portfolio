# Imports the node image from docker hub
FROM node

# Create app directory
WORKDIR /app

# Initially copies the package.json to install dependencies
# If this were Ruby or Rails, we might instead be copying the Gemfile
COPY package.json /app

# Install app dependencies
RUN npm install

# Bundle app source
# Copies all project files and directories to the container
COPY . .

# Bind the port that the image will run on
# 5173 in this case because vite/react is set up to use this
EXPOSE 5173

# Define the command to run your app
# It seems we need an array of words that will be joined when the container is 'run'
CMD [ "npm", "run", "dev"]
