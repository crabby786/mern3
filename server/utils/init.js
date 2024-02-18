const express = require('express');
const User = require('../modules/user/user.model'); // Path to your User model

async function createTestUserIfNoneExist() {
    try {
      const existingUsers = await User.find();
      if (existingUsers.length === 0) {
        const testUser = new User({
          name: 'Test User',
          role: 'user',
          email: 'test@example.com',
          // Optionally set other fields with default values
        });
        await testUser.save();
        console.log('Created test user:', testUser._id);
      } else {
        console.log('Test user not created: Users already exist.');
      }
    } catch (err) {
      console.error('Error creating test user:', err);
    }
  }

  module.exports.createTestUserIfNoneExist = createTestUserIfNoneExist;