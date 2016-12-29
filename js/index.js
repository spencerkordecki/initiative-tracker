(function() {
    Vue.component('characterInfo', {
        template: '\
            <div class="tr center-align">\
                <span class="td"> {{ character.characterInitiative }} </span>\
                <span class="td"> {{ character.characterName }} </span>\
                <span class="td"> {{ character.characterHP }} </span>\
                <span class="td"> <button @click="$emit(\'remove\')">X</button></span>\
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
