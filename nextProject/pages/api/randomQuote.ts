export default (req: any, res: any) => {
    res.status(200).json({
        quote: 'Write tests, not too many, mostly integration',
        author: 'Guillermo Rauch'
    });
};