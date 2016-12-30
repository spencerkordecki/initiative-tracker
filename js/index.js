(function() {
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
            characters: []
        },
        methods: {
            newCharacter: function() {
                var initiative, characterName, characterHP;
                initiative = this.characters.characterInitiative;
                characterName = this.characters.characterName;
                characterHP = this.characters.characterHP;

                if (!initiative || !characterName || !characterHP) {
                    console.log('all fields plz.');
                }
                else {
                    this.characters.push({
                        characterInitiative: this.characters.characterInitiative,
                        characterName: this.characters.characterName,
                        characterHP: this.characters.characterHP
                    });

                    this.characters.characterInitiative = '';
                    this.characters.characterName= '';
                    this.characters.characterHP = '';
                }
            },
            removeCharacter: function(index) {
                this.characters.splice(index, 1);
            }
        }
    })
})()
