module.exports = (fan) => {
    return {
        on: (req, res) => {
            fan.write(1, (err) => {
                if(err) {
                    res.status(500).json({
                        success: false,
                        error: err.toString()
                    });
                } else {
                    res.status(200).json({ success: true });
                }
            });
        },

        off: (req, res) => {
            fan.write(0, (err) => {
                if(err) {
                    res.status(500).json({
                        success: false,
                        error: err.toString()
                    });
                } else {
                    res.status(200).json({ success: true });
                }
            });
        },

        state: (req, res) => {
            fan.read((err, val) => {
                if(err) {
                    res.status(500).json({
                        success: false,
                        error: err.toString()
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        state: val === 1
                    });
                }
            });
        }
    };
};