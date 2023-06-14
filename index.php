<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <!-- Bootstrap 5 CSS CDN -->
  <link href="src/css/bootstrap.min.css" rel="stylesheet">
  <link href="src/css/style.css" rel="stylesheet">
  <title>Keeper League Draft Lottery</title>
</head>
<body>
  <div class="container-md" id="app">
    <div class="row align-items-center pt-5 pb-5">
      <div class="col">
        <h1>Lottery Team Odds</h1>
        <ol v-cloak class="list-group list-group-numbered">
          <li v-for="(team, index) in teams" v-once class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ team.name }}</div>
            </div>
            <span class="badge bg-primary rounded-pill">{{ team.odds }}%</span>
          </li>
        </ol>
      </div>
    </div>
    <div class="row pb-5" v-cloak>
      <div class="col">
        <button @click="generateRandomNumber()" type="button" class="btn btn-primary">Run Draft Lottery</button>
      </div>
    </div>
    <div v-if="winning_team" v-cloak class="row">
      <div class="col">
        <h1>Draft Lottery Results</h1>
        <ol class="list-group list-group-numbered">
          <li
          v-for="(team, index) in teams"
          v-bind:id="team.name"
          @click="removeBlackBackground(team.name)"
          class="list-group-item d-flex justify-content-between align-items-start black-background">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ team.name }}</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>

  <!-- Vue 3 CDN -->
  <script src="src/js/vue.global.js"></script>
  <script src="src/js/app.js"></script>
</body>
</html>