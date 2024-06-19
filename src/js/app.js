const { createApp } = Vue;

createApp({
  data() {
    return {
      teams: [
        {
          name: 'EviL',
          odds: 35,
        },
        {
          name: 'Renard',
          odds: 30,
        },
        {
          name: 'fsi',
          odds: 20,
        },
        {
          name: 'Seb',
          odds: 10,
        },
        {
          name: 'Panther',
          odds: 5,
        }
      ],
      winning_number: undefined,
      winning_team: undefined
    }
  },
  methods: {
    // Create function to generate a random number between 1 and 100 (including the numbers 1 and 100) rounded to the nearest whole number
    generateRandomNumber() {
      // Make sure teams array is set to the correct starting order
      this.teams = [
        {
          name: 'EviL',
          odds: 35,
        },
        {
          name: 'Renard',
          odds: 30,
        },
        {
          name: 'fsi',
          odds: 20,
        },
        {
          name: 'Seb',
          odds: 10,
        },
        {
          name: 'Panther',
          odds: 5,
        }
      ]
      // Generate the random number between 1 and 100
      this.winning_number = Math.floor(Math.random() * 100) + 1;
      console.log(this.winning_number);

      // Check who won the draft lottery
      if (this.winning_number >= 1 && this.winning_number <= 35) {
        console.log('EviL wins!');
        this.winning_team = 'EviL';
      }
      else if (this.winning_number >= 36 && this.winning_number <= 65) {
        console.log('Renard wins!');
        this.winning_team = 'Renard';
      }
      else if (this.winning_number >= 66 && this.winning_number <= 85) {
        console.log('fsi wins!');
        this.winning_team = 'fsi';
      }
      else if (this.winning_number >= 86 && this.winning_number <= 95) {
        console.log('Seb wins!');
        this.winning_team = 'Seb';
      }
      else if (this.winning_number >= 96 && this.winning_number <= 100) {
        console.log('Panther wins!');
        this.winning_team = 'Panther';
      }

      // Reorder the teams array based on the draft lottery results
      const winning_team_index = this.teams.findIndex(team => team.name === this.winning_team);

      if (winning_team_index > -1) {
        const winningTeamObj = this.teams.splice(winning_team_index, 1)[0];
        this.teams.unshift(winningTeamObj);
      }

      console.log(this.teams);
    },
    removeBlackBackground(team) {
      const current_team = document.getElementById(team);
      current_team.classList.remove('black-background');
    }
  }
}).mount('#app');
