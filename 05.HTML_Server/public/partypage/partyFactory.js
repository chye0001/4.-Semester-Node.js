function partyFactory(partyName) {
    return {
        partyName,
        supplies: ["🥳", "🍾", "🥂", "🎈", "🎉", "🎊", "🎓"]
    }; //kan fejle hvis ikke man bruge semikolon, når man har multiline return statement
}

export default partyFactory;
