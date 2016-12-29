(function() {
    Vue.component('characterInfo', {
        template: '\
            <div class="tr">\
                <span class="td"> {{ character.characterInitiative }} </span>\
                <span class="td"> {{ character.characterName }} </span>\
                <span class="td"> {{ character.characterHP }} </span>\
                <span class="td"> <button v-on:click="$emit(\'remove\')">X</button></span>\
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
                this.characters.push({
                    characterInitiative: this.characters.characterInitiative,
                    characterName: this.characters.characterName,
                    characterHP: this.characters.characterHP
                });
            }
        }
    })
})()
