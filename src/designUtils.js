export function isWinnerPokedexRound (roundScore, winnerScore) {
    const roundIsWinner = roundScore === winnerScore;
    return {
        css_class_round: roundIsWinner ? "Pokedex_round_score_win": "Pokedex_round_score_lose",
        css_class_text: roundIsWinner ? "Pokedex_round_score_win_text": "Pokedex_round_score_lose_text",
        css_class_border: roundIsWinner? "Pokedex_line_card_border_green": "Pokedex_line_card_border_red",
        text: roundIsWinner ? "Winer round!": "Lost round!"
    };
}