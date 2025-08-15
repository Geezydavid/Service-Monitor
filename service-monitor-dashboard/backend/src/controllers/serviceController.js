exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching services', error });
    }
};

exports.updateServiceStatus = async (req, res) => {
    const { id } = req.params;
    const { status, cpu, memory, uptime } = req.body;

    try {
        const updatedService = await Service.findByIdAndUpdate(id, { status, cpu, memory, uptime }, { new: true });
        if (!updatedService) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ message: 'Error updating service', error });
    }
};

exports.createService = async (req, res) => {
    const { name, status, cpu, memory, uptime } = req.body;

    try {
        const newService = new Service({ name, status, cpu, memory, uptime });
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ message: 'Error creating service', error });
    }
};