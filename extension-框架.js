game.import('character', function () {
    var 武将包名英文 = {
        name: '武将包名英文',
        connect: true,
        character: {
            // 武将格式:
            // "武将名字": ["性别", "势力", 体力, [技能], []],
            // 格式内每一样东西都不能缺少，否则无法导入该武将包及其以下内容
        },
        characterIntro: {}, // 武将介绍（选填）
        characterTitle: {}, // 武将标题（用于写称号或注释）（选填）
        skill: {}, // 技能（必填）
        translate: {}, // 翻译（必填）
        perfectPair: {}, // 珠联璧合武将（选填）
    };
    if (lib.device || lib.node) {
        for (var i in 武将包名英文.character) {
            武将包名英文.character[i][4].push('ext:扩展名/' + i + '.jpg');
        }
    } else {
        for (var i in 武将包名英文.character) {
            武将包名英文.character[i][4].push('db:extension-扩展名:' + i + '.jpg');
        }
    }
    // 由于以此法加入的武将包武将图片是用源文件的，所以要用此法改变路径
    return 武将包名英文;
});
lib.config.all.characters.push('武将包名英文');
if (!lib.config.characters.contains('武将包名英文')) lib.config.characters.push('武将包名英文');
lib.translate['武将包名英文_character_config'] = '武将包名';
// 包名翻译
// 卡包（手牌）
game.import('card', function () {
    var 卡包名英文 = {
        name: '卡包名英文',
        connect: true,
        card: {
            // 卡格式
        },
        skill: {}, // 技能
        translate: {}, // 翻译
        list: [], // 牌堆添加
    };
    return 卡包名英文;
});
lib.translate['卡包名英文_card_config'] = '卡包名';
lib.config.all.cards.push('卡包名英文');
if (!lib.config.cards.contains('卡包名英文')) lib.config.cards.push('卡包名英文');
// 包名翻译
}
},
config: {
    "武将包名英文"
:
    {
        "name"
    :
        "将武将包名内武将设为禁用",
            "init"
    :
        false
    }
,
    // 由于以此法添加的武将包自带的禁用按钮无法使用，需要写这个选项来禁用该武将包武将（单机）
}
,
help: {
}
,
package: {
    character: {
        character: {
        }
    ,
        translate: {
        }
    ,
    }
,
    card: {
        card: {
        }
    ,
        translate: {
        }
    ,
        list: [],
    }
,
    skill: {
        skill: {
        }
    ,
        translate: {
        }
    ,
    }
,
    intro: "",
        author
:
    "Aurora",
        diskURL
:
    "",
        forumURL
:
    "",
        version
:
    "",
}
,
files: {
    "character"
:
    [],
        "card"
:
    [],
        "skill"
:
    []
}
}
;
})
;
