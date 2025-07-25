const { createApp } = Vue;

createApp({
  data() {
    return {
      teams: [
        {
          name: 'EviL',
          odds: 40,
        },
        {
          name: 'Renard',
          odds: 30,
        },
        {
          name: 'Durk',
          odds: 20,
        },
        {
          name: 'Jak',
          odds: 10,
        },
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
          name: 'Durk',
          odds: 20,
        },
        {
          name: 'Jak',
          odds: 10,
        },
      ]
      // Generate the random number between 1 and 100
      this.winning_number = Math.floor(Math.random() * 100) + 1;
      console.log(this.winning_number);

      // Check who won the draft lottery
      if (this.winning_number >= 1 && this.winning_number <= 40) {
        console.log('EviL wins!');
        this.winning_team = 'EviL';
      }
      else if (this.winning_number >= 41 && this.winning_number <= 70) {
        console.log('Renard wins!');
        this.winning_team = 'Renard';
      }
      else if (this.winning_number >= 71 && this.winning_number <= 90) {
        console.log('Durk wins!');
        this.winning_team = 'Durk';
      }
      else if (this.winning_number >= 91 && this.winning_number <= 100) {
        console.log('Jak wins!');
        this.winning_team = 'Jak';
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
