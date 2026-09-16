type CommandFunction = (args: string[]) => string;

export const commands: Record<string, CommandFunction> = {
    echo: (args) => {
        return args.join(" ");
    },

    help: () => {
        return "MurasaShell v1.0<br><br> \
        clear - clears display<br> \
        echo [string] - 'echoes' string back<br>\
        man [manual name] - displays manual pages";
    },
    
    socials: () => {
        return "GitHub: <a href='https://github.com/capitanmurasa' target='_blank'>@capitanmurasa</a><br> \
        X(Twitter): <a href='https://x.com/exedist1' target='_blank' >@exedist1</a><br>\
        Telegram: <a href='https://t.me/MurasaAlt08' target='_blank' >@MurasaAlt08</a><br>\
        Discord: capitanmurasa";
    }
};