(function() {
    Vue.component('characterInfo', {
        template: '\
            <tr>\
                <td v-bind:characterInitiative="character"> {{ character.characterInitiative }} </td>\
                <td> {{ character.characterName }} </td>\
                <td> {{ character.characterHP }} </td>\
                <td> <button v-on:click="$emit(\'remove\')">X</button></td>\
            </tr>',
        props: ['character']
    });

    var app = new Vue({
        el: '#initiative-tracker',
        data: {
            characters: [{
                characterInitiative: '1',
                characterName: 'ginger',
                characterHP: '9000'
            },
            {
                characterInitiative: '1',
                characterName: 'ginger',
                characterHP: '900'
            }]
        }
    })
})()
