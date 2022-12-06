/* Comandos básicos do cmd(prompt de comando) do Windows.

Entrar numa pasta:

        cd [nomePasta]

Listar arquivos:

        dir

Voltar um diretório:

        cd ..

Criar um diretório:

        mkdir [nomePasta]


/////////////////////////////////////////////////////////////////

Iniciar o Git na pasta do projeto pelo terminal: (Irá criar um repositório e arquivos do git).

        git init


Criando um arquivo readme.md (abrir o vscode e criar um arquivo na pasta do projeto readme.md e colocar os textos)

no terminal na pasta do projeto digitar o código abaixo.

        git status                        //realiza uma leitura e verifica mudanças.
        git add -A                        //adiciona todos os arquivos novos não monitorado pelo git.
        git commit -m "Criando Projeto"   // realizando o commit


////////////////////////////////////////////////////////////////


caso quisermos verificar o histórico dos commit:

        git log


/////////////////////////////////////////////////////////////////

Consultar quantos branchs temos no projeto.

        git branch    // o que tiver o * é o que estamos atualmente.


Voltar para um commit anterior.

        git log    //pegar o id do commit que queremos voltar.
        
        
        git reset --soft [colar id commit] //voltar para commit especif. mantendo as alterações atuais, necess. dar novo commit

ou

        git reset --hard [colar id commit]   //voltar para o commit especificado resetando todas as alterações do atual.


























*/