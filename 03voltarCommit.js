/*////////////////////////////////////////////////////////////////


caso quisermos verificar o histórico dos commit:

        git log


/////////////////////////////////////////////////////////////////

Consultar quantos branchs temos no projeto.

        git branch    // o que tiver o * é onde estamos atualmente.


Voltar para um commit anterior.

        git log    //pegar o id do commit que queremos voltar.
        
        
        git reset --soft [colar id commit] //voltar para commit especif. mantendo as alterações atuais, necess. dar novo commit

ou

        git reset --hard [colar id commit]   //voltar para o commit especificado resetando todas as alterações do atual.

*/