export default (req: any, res: any) => {
    res.status(200).json({
        class: '初二一班',
        author: 'Guillermo Rauch'
    });
}