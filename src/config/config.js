const gameConfig = {
    minimumPokemons: 2,
    maximumPokemons: 8,
    POKE_API: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
    cssRules: {
        "POKEDEX_CARD": {
            POKEDEX_ROUND_SCORE_WIN: "Pokedex_round_score_win",
            POKEDEX_ROUND_SCORE_LOSE: "Pokedex_round_score_lose",
            POKEDEX_ROUND_SCORE_WIN_TEXT: "Pokedex_round_score_win_text",
            POKEDEX_ROUND_SCORE_LOSE_TEXT: "Pokedex_round_score_lose_text",
            POKEDEX_ROUND_LINE_BORDER_GREEN: "Pokedex_line_card_border_green",
            POKEDEX_ROUND_LINE_BORDER_RED: "Pokedex_line_card_border_red",
        }
    },
    texts: {
        POKEDEX_ROUND_WIN_TEXT: "Winner round!",
        POKEDEX_ROUND_LOSE_TEXT: "Lost round!"
    }
}

export default gameConfig;