(function() {
    // Create the template for the individual characters' information in the table
    Vue.component('characterInfo', {
        template: '\
            <div class="mdl-grid tracker-max-width">\
                <span class="mdl-cell mdl-cell--3-col center-align"> {{ character.characterInitiative }} </span>\
                <span class="mdl-cell mdl-cell--3-col center-align"> {{ character.characterName }} </span>\
                <span class="mdl-cell mdl-cell--3-col center-align"> {{ character.characterHP }} </span>\
                <span class="mdl-cell mdl-cell--3-col center-align">\
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="$emit(\'remove\')">\
                        REMOVE\
                    </button>\
                </span>\
            </div>',
        props: ['character']
    });

    var app = new Vue({
        el: '#initiative-tracker',
        data: {
            characters: [], // Initialize the empty data
            sortOrder: '-1' // Determines how to sort the data
        },
        methods: {
            // Adds a new character to the table
            newCharacter: function() {
                var initiative, characterName, characterHP;
                initiative = this.characters.characterInitiative;
                characterName = this.characters.characterName;
                characterHP = this.characters.characterHP;

                if (!initiative || !characterName || !characterHP) { // Check to make sure all fields have been filled out
                    console.log('all fields plz.');
                }
                else {
                    // Add the new character
                    this.characters.push({
                        characterInitiative: this.characters.characterInitiative,
                        characterName: this.characters.characterName,
                        characterHP: this.characters.characterHP
                    });

                    // Sort the array with the new character to preserve the low-high order
                    this.characters.sort(function(a, b) {
                        var x = parseInt(a['characterInitiative'], 10);
                        var y = parseInt(b['characterInitiative'], 10);
                        return (x === y ? 0 : x > y ? 1 : -1);
                    });

                    this.characters.characterInitiative = '';
                    this.characters.characterName= '';
                    this.characters.characterHP = '';
                }
            },
            // Removes a character from the table
            removeCharacter: function(index) {
                this.characters.splice(index, 1);
            },
            // Sorts the table in ascending or descending order upon clicking on the header
            sort: function(column) {
                if (this.characters.length) { // Check that there is information to sort
                    this.sortOrder *= -1;
                    var order = this.sortOrder;

                    return this.characters.sort(function(a, b) {
                        var x = parseInt(a[column], 10);
                        var y = parseInt(b[column], 10);
                        return (x === y ? 0 : x > y ? 1 : -1) * order;
                    });
                }
            }
        }
    })
})()
