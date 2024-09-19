# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Make the server accessible from outside the container
EXPOSE 3000

# Command to run the app
CMD [ "node", "app.js" ]
