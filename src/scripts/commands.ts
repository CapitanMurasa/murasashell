type CommandFunction = (args: string[]) => string;

export const commands: Record<string, CommandFunction> = {
    echo: (args) => {
        return args.join(" ");
    },
    
    socials: () => {
        return "GitHub: <a href='https://github.com/capitanmurasa' target='_blank'>@capitanmurasa</a><br> \
        X(Twitter): <a href='https://x.com/exedist1' target='_blank' >@exedist1</a><br>\
        Telegram: <a href='https://t.me/MurasaAlt08' target='_blank' >@MurasaAlt08</a>";
    }
};