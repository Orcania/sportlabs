const fs = require('fs');
const path = require('path');

const getTemplate = pageName =>
    `import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

const ${pageName}Page = () => {
    return (
        <div style={{ height: '100vh' }}>
            <div className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">This page was auto generated by generate_template script</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

${pageName}Page.getLayout = page => getPageTitleLayout(getMainLayout(page), '${pageName}');

export default ${pageName}Page;        
`;

function generate_template(pageName) {
    // convert first letter to upper case
    const pName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    const template = getTemplate(pName);

    // create folder
    const folder = path.join(__dirname, '../../pages', pageName);
    fs.mkdirSync(folder, { recursive: true });

    // create file
    const filePath = path.join(__dirname, '../../pages', pageName, 'index.js');
    fs.writeFileSync(filePath, template);
}

module.exports = generate_template;