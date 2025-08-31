module.exports = {
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#3AB0FF',
                    DEFAULT: '#0071E3',
                    dark: '#004A9F'
                }
            }
        }
    }
};

module.exports = {
    theme: {
        extend: {
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem'
            }
        }
    },
    plugins: [],
};
module.exports = {
    theme: {
        extend: {
            coolors: {
                primary: '#1DA1F2',
                secondary: '#14171A',
                accent: '#657786',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            fontFamily: {
                brand: ['"coomic sans ms"', 'cursive'],
            }
        }

    },
    plugins: []
};

module.exports = {
    theme: {
        extend: {
            coolors: {
                brand: {
                    light: '#3AB0FF',
                    DEFAULT: '#0071E3',
                    dark: '#004A9F'
                },
                danger: {
                    light: '#FF6B6B',
                    DEFAULT: '#FF3B3B',
                    dark: '#C70000'
                }
            },
            success: {
                light: '#6BCB77',
                DEFAULT: '#28A745',
                dark: '#1E7E34'
            },
        },
    },
    plugins: []
};

module.exports = {
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#3AB0FF',
                    DEFAULT: '#0071E3',
                    dark: '#004A9F'
                },
                accent: {
                    light: '#FF6B6B',
                    DEFAULT: '#FF3B3B',
                    dark: '#C70000'
                },
                success: {
                    light: '#6BCB77',
                    DEFAULT: '#28A745',
                    dark: '#1E7E34'
                },
            }
        },
        Plugins: []
    }
};

module.exports = {
    theme: {
        extend: {
            colors: {
                text: {
                    heading: '#333333',
                    body: '#666666',
                    link: '#1DA1F2',
                    muted: '#999999',
                },
            },
        },
    },
    plugins: [],
};

module.exports = {
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                barnd: {
                    light: '#ffff',
                    dark: '#1e40af'
                },
            },
        },
    },
    Plugins: []
}

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: []
};

moodule.exports = {
    darkMode: 'class',
    theme: {
        extend: {},
    },
    Plugins: [],
};


function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}