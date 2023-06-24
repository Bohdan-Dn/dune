const players = {
    olegOld: {
        atreides: { games: 0, victories: 0, points: 0 },
        bene: { games: 1, victories: 1, points: 0.5 },
        guild: { games: 2, victories: 2, points: 2.5 },
        harkonnen: { games: 1, victories: 0, points: 0 },
        emperor: { games: 0, victories: 0, points: 0 },
        fremen: { games: 2, victories: 0, points: 0 },
        ixian: { games: 0, victories: 0, points: 0 },
        richese: { games: 0, victories: 0, points: 0 },
        choam: { games: 0, victories: 0, points: 0 },
        tleilaxu: { games: 1, victories: 0, points: 0 },
    },
    olegRed: {
        atreides: { games: 1, victories: 0, points: 0 },
        bene: { games: 0, victories: 0, points: 0 },
        guild: { games: 0, victories: 0, points: 0 },
        harkonnen: { games: 0, victories: 0, points: 0 },
        emperor: { games: 0, victories: 0, points: 0 },
        fremen: { games: 0, victories: 0, points: 0 },
        ixian: { games: 1, victories: 0, points: 0 },
        richese: { games: 0, victories: 0, points: 0 },
        choam: { games: 0, victories: 0, points: 0 },
        tleilaxu: { games: 0, victories: 0, points: 0 },
    },
    ivan: {
        atreides: { games: 1, victories: 0, points: 0 },
        bene: { games: 1, victories: 0, points: 0 },
        guild: { games: 0, victories: 0, points: 0 },
        harkonnen: { games: 1, victories: 0, points: 0 },
        emperor: { games: 1, victories: 0, points: 0 },
        fremen: { games: 1, victories: 1, points: 2 },
        ixian: { games: 1, victories: 0, points: 0 },
        richese: { games: 1, victories: 0, points: 0 },
        choam: { games: 0, victories: 0, points: 0 },
        tleilaxu: { games: 1, victories: 1, points: 2 },
    },
    nazar: {
        atreides: { games: 1, victories: 0, points: 0 },
        bene: { games: 2, victories: 1, points: 2 },
        guild: { games: 0, victories: 0, points: 0 },
        harkonnen: { games: 2, victories: 0, points: 0 },
        emperor: { games: 2, victories: 0, points: 0 },
        fremen: { games: 1, victories: 0, points: 0 },
        ixian: { games: 4, victories: 3, points: 7 },
        richese: { games: 0, victories: 0, points: 0 },
        choam: { games: 0, victories: 0, points: 0 },
        tleilaxu: { games: 0, victories: 0, points: 0 },
    },
    denisJunior: {
        atreides: { games: 1, victories: 0, points: 0 },
        bene: { games: 1, victories: 0, points: 0 },
        guild: { games: 1, victories: 0, points: 0 },
        harkonnen: { games: 0, victories: 0, points: 0 },
        emperor: { games: 0, victories: 0, points: 0 },
        fremen: { games: 0, victories: 0, points: 0 },
        ixian: { games: 0, victories: 0, points: 0 },
        richese: { games: 1, victories: 0, points: 0 },
        choam: { games: 0, victories: 0, points: 0 },
        tleilaxu: { games: 2, victories: 0, points: 0 },
    },
    mrYuri: {
        atreides: { games: 2, victories: 0, points: 0 },
        bene: { games: 2, victories: 1, points: 0.5 },
        guild: { games: 0, victories: 0, points: 0 },
        harkonnen: { games: 1, victories: 0, points: 0 },
        emperor: { games: 1, victories: 1, points: 2 },
        fremen: { games: 2, victories: 2, points: 2.5 },
        ixian: { games: 1, victories: 0, points: 0 },
        richese: { games: 1, victories: 0, points: 0 },
        choam: { games: 0, victories: 0, points: 0 },
        tleilaxu: { games: 2, victories: 0, points: 0 },
    },
    bohdan: {
        atreides: { games: 2, victories: 2, points: 4 },
        bene: { games: 1, victories: 1, points: 2 },
        guild: { games: 0, victories: 0, points: 0 },
        harkonnen: { games: 1, victories: 1, points: 3 },
        emperor: { games: 2, victories: 0, points: 0 },
        fremen: { games: 2, victories: 2, points: 3 },
        ixian: { games: 2, victories: 2, points: 2.5 },
        richese: { games: 1, victories: 0, points: 0 },
        choam: { games: 1, victories: 0, points: 0 },
        tleilaxu: { games: 0, victories: 0, points: 0 },
    },
    igor: {
        atreides: { games: 2, victories: 0, points: 0 },
        bene: { games: 2, victories: 1, points: 2 },
        guild: { games: 1, victories: 1, points: 0.5 },
        harkonnen: { games: 3, victories: 1, points: 2 },
        emperor: { games: 1, victories: 0, points: 0 },
        fremen: { games: 0, victories: 0, points: 0 },
        ixian: { games: 0, victories: 0, points: 0 },
        richese: { games: 0, victories: 0, points: 0 },
        choam: { games: 1, victories: 0, points: 0 },
        tleilaxu: { games: 2, victories: 0, points: 0 },
    },
    maxim: {
        atreides: { games: 1, victories: 0, points: 0 },
        bene: { games: 2, victories: 0, points: 0 },
        guild: { games: 2, victories: 0, points: 0 },
        harkonnen: { games: 1, victories: 0, points: 0 },
        emperor: { games: 1, victories: 0, points: 0 },
        fremen: { games: 1, victories: 0, points: 0 },
        ixian: { games: 2, victories: 0, points: 0 },
        richese: { games: 0, victories: 0, points: 0 },
        choam: { games: 2, victories: 0, points: 0 },
        tleilaxu: { games: 0, victories: 0, points: 0 },
    },
    andriy: {
        atreides: { games: 0, victories: 0, points: 0 },
        bene: { games: 0, victories: 0, points: 0 },
        guild: { games: 0, victories: 0, points: 0 },
        harkonnen: { games: 0, victories: 0, points: 0 },
        emperor: { games: 0, victories: 0, points: 0 },
        fremen: { games: 0, victories: 0, points: 0 },
        ixian: { games: 0, victories: 0, points: 0 },
        richese: { games: 0, victories: 0, points: 0 },
        choam: { games: 0, victories: 0, points: 0 },
        tleilaxu: { games: 0, victories: 0, points: 0 },
    },
    misha: {
        atreides: { games: 0, victories: 0, points: 0 },
        bene: { games: 0, victories: 0, points: 0 },
        guild: { games: 0, victories: 0, points: 0 },
        harkonnen: { games: 0, victories: 0, points: 0 },
        emperor: { games: 1, victories: 0, points: 0 },
        fremen: { games: 0, victories: 0, points: 0 },
        ixian: { games: 0, victories: 0, points: 0 },
        richese: { games: 0, victories: 0, points: 0 },
        choam: { games: 0, victories: 0, points: 0 },
        tleilaxu: { games: 0, victories: 0, points: 0 },
    }
};