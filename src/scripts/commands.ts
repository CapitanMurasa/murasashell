type CommandFunction = (args: string[]) => string;

export const commands: Record<string, CommandFunction> = {
    echo: (args) => {
        return args.join(" ");
    },
    
    // man: (args) => {
    //     if (args.length === 0) return "What manual page do you want?";
        
    //     const page = args[0].toLowerCase();
    //     if (page === 'aboutme') {
    //         return "man aboutme";
    //     }
    //     if (page === 'projects') {
    //         return "man projects";
    //     }
        
    //     return `No manual entry for ${page}`;
    // },
    
    socials: () => {
        return "GitHub: <a href='https://github.com/capitanmurasa' target='_blank'>@capitanmurasa</a><br> \
        X(Twitter): <a href='https://x.com/exedist1' target='_blank' >@exedist1</a>";
    }
};