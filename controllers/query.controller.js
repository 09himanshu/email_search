
const inbox = require('../models/inbox.models');
const outbox = require('../models/outbox.model');

exports.search = async (req, res) => {
    let box = req.body.search_space;
    let keyword = req.body.keyword;
    let _id = req.body.id;
    console.log(_id);
    let data;
    try{
        if(box == 'inbox') {
            if(!keyword) {
                data = await inbox.findOne({_id});
            }
            else {
                data = await inbox.find({'subject': {'$regex': keyword}}).sort({'_id': -1});
            }
        } else if(box == 'outbox') {
            if(!keyword) {
                data = await outbox.findOne({_id});
            } else {
                data = await outbox.find({'subject': {'$regex': keyword}}).sort({'_id': -1});
            }
        }
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }

}

exports.delete = async (req, res) => {
    let _id = req.params.id;
    let box = req.body.search_space;
    let userId = req._id;
    try{
        if(!box) return res.status(401).send({message: `No body selected for delete`});
        if(box == 'inbox') {
            let check = await inbox.findOne({userId});
            if(!check) return res.status(404).send({message: `Invalid user !!!!!!!!!`});
            await inbox.deleteOne({_id});
        } else if(box == 'outbox') {
            let check = await outbox.findOne({userId});
            if(!check) return res.status(404).send({message: `Invalid user !!!!!!!!!!`});
            await outbox.deleteOne({_id});
        }
        res.status(200).send({message: `Email deleted successfully`});
    } catch(err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}