const operations = [
    { id: 0x1011, text: 'Дополнение пустого множества' },
    { id: 0x1021, text: 'Дополнение универсального множества' },
    { id: 0x2021, text: 'Дополнение универсального множества x1' },
    { id: 0x3021, text: 'Дополнение универсального множества x2' },
    { id: 0x4021, text: 'Дополнение универсального множества x3' },
    { id: 0x5021, text: 'Дополнение универсального множества x4' },
    { id: 0x6021, text: 'Дополнение универсального множества x5' },
    { id: 0x7021, text: 'Дополнение универсального множества x6' },
    { id: 0x1031, text: 'Дополнение пересечения' },
    { id: 0x2031, text: 'Дополнение пересечения x1' },
    { id: 0x1041, text: 'Дополнение объединения' },
    { id: 0x2041, text: 'Дополнение объединения x1' },
    { id: 0x1051, text: 'Раскрытие скобок пересечения' },
    { id: 0x1061, text: 'Раскрытие скобок объединения' },
    { id: 0x1071, text: 'Пересечение с пустым множеством' },
    { id: 0x2071, text: 'Пересечение с пустым множеством x1' },
    { id: 0x3071, text: 'Пересечение с пустым множеством x2' },
    { id: 0x4071, text: 'Пересечение с пустым множеством x3' },
    { id: 0x5071, text: 'Пересечение с пустым множеством x4' },
    { id: 0x6071, text: 'Пересечение с пустым множеством x5' },
    { id: 0x7071, text: 'Пересечение с пустым множеством x6' },
    { id: 0x1081, text: 'Объединение с пустым множеством' },
    { id: 0x1091, text: 'Пересечение с универсальным множеством' },
    { id: 0x10A1, text: 'Объединение с универсальным множеством' },
    { id: 0x10B1, text: 'Двойное дополнение' },
    { id: 0x10C1, text: 'Пересечение одинаковых множеств' },
    { id: 0x10D1, text: 'Объединение одинаковых множеств' },
    { id: 0x10E1, text: 'Пересечение множества и его дополнения' },
    { id: 0x20E1, text: 'Пересечение множества и его дополнения x1' },
    { id: 0x30E1, text: 'Пересечение множества и его дополнения x2' },
    { id: 0x40E1, text: 'Пересечение множества и его дополнения x3' },
    { id: 0x50E1, text: 'Пересечение множества и его дополнения x4' },
    { id: 0x60E1, text: 'Пересечение множества и его дополнения x5' },
    { id: 0x70E1, text: 'Пересечение множества и его дополнения x6' },
    { id: 0x10F1, text: 'Объединение множества и его дополнения' },
    { id: 0x1101, text: 'Разность универсума и множества' },
    { id: 0x1111, text: 'Разность множеств' },
    { id: 0x1121, text: 'Формула включения / исключения x2' },
    { id: 0x1131, text: 'Формула включения / исключения x3' },
    { id: 0x2141, text: 'Мощность пустого множества x1' },
    { id: 0x3141, text: 'Мощность пустого множества x2' },
    { id: 0x4141, text: 'Мощность пустого множества x3' },
    { id: 0x5141, text: 'Мощность пустого множества x4' },
    { id: 0x6141, text: 'Мощность пустого множества x5' },
    { id: 0x7141, text: 'Мощность пустого множества x6' },

    { id: 0x1012, text: 'Отрицание' },
    { id: 0x2012, text: 'Отрицание x1' },
    { id: 0x1022, text: 'Раскрытие скобок умножения' },
    { id: 0x1032, text: 'Двойное отрицание' },
    { id: 0x1042, text: 'Сумма количесва элементов и его отрицания' },
    { id: 0x2042, text: 'Сумма количесва элементов и его отрицания x2' },
    { id: 0x4042, text: 'Сумма количесва элементов и его отрицания x4' },
    { id: 0x6042, text: 'Сумма количесва элементов и его отрицания x6' },
    { id: 0x1052, text: 'Мощность дополнения множества' },
    { id: 0x1062, text: 'Мощность разности универсума и множества' },
    { id: 0x1072, text: 'Приведение подобных членов' },
    { id: 0x1082, text: 'Умножение на 0' },
    { id: 0x2082, text: 'Умножение на 0 x2' },
    { id: 0x3082, text: 'Умножение на 0 x4' },
    { id: 0x4082, text: 'Умножение на 0 x6' },
    { id: 0x1092, text: 'Умножение на 1' },
    { id: 0x10A2, text: 'Умножение на -1' },
    { id: 0x10B2, text: 'Деление на 1' },
    { id: 0x10C2, text: 'Сложение с 0' },

    { id: 0x1013, text: 'Выполнение операций с числами' },
    { id: 0x1023, text: 'Перестановка' },
    { id: 0x1033, text: 'Перенос через равно' },
    { id: 0x1043, text: 'Подстановка' },
    { id: 0x1053, text: 'Вывод' },

    { id: 0x1014, text: 'Дано' },
    { id: 0x1024, text: 'Найти' },
    { id: 0x1034, text: 'Ответ' },
];

function operationById(id) {
    const res = operations.find((val) => {
        return val.id === id;
    });
    if (res === undefined) return undefined;
    return res.text;
}

function operationByText(text) {
    const res = operations.find((val) => {
        return val.text === text;
    });
    if (res === undefined) return undefined;
    return res.id;
}