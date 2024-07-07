const ReceipeController = {

    index: (req, res) => {
        return res.json({
            message: "Get receipe"
        });
    },
    store: (req, res) => {
        return res.json({
            message: "store receipe"
        });
    },
    show: (req, res) => {
        return res.json({
            message: "get single receipe"
        });
    },
    destroy: (req, res) => {
        return res.json({
            message: "delete single receipe"
        });
    },
    update: (req, res) => {
        return res.json({
            message: "update single receipe"
        });
    }
}

module.exports = ReceipeController