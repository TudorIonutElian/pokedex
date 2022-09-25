import gameConfig from "./config/config";

export function isWinnerPokedexRound (roundScore, winnerScore) {
    const roundIsWinner = roundScore === winnerScore;
    return {
        css_class_round: roundIsWinner ? gameConfig.cssRules.POKEDEX_CARD.POKEDEX_ROUND_SCORE_WIN: gameConfig.cssRules.POKEDEX_CARD.POKEDEX_ROUND_SCORE_LOSE,
        css_class_text: roundIsWinner ? gameConfig.cssRules.POKEDEX_CARD.POKEDEX_ROUND_SCORE_WIN_TEXT: gameConfig.cssRules.POKEDEX_CARD.POKEDEX_ROUND_SCORE_LOSE_TEXT,
        css_class_border: roundIsWinner? gameConfig.cssRules.POKEDEX_CARD.POKEDEX_ROUND_LINE_BORDER_GREEN: gameConfig.cssRules.POKEDEX_CARD.POKEDEX_ROUND_LINE_BORDER_RED,
        text: roundIsWinner ? gameConfig.texts.POKEDEX_ROUND_WIN_TEXT: gameConfig.texts.POKEDEX_ROUND_LOSE_TEXT
    };
}