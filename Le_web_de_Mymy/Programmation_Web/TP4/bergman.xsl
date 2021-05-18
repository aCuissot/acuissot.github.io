<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="fr">
            <body>
                <h2>
                    <a href="https://fr.wikipedia.org/wiki/Sept_et_Demi" style="text-decoration:none">Bergman</a>
                </h2>
                <p>Exercice de prise en main du XSL</p>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th style="text-align:left">Affiche</th>
                        <th style="text-align:left">Description</th>
                    </tr>
                    <xsl:for-each select="filmographie/film">
                        <tr>
                            <td>
                                <xsl:element name="img">
                                    <xsl:if test="@img">
                                        <xsl:attribute name="src">img/<xsl:value-of select="@img"/>
                                        </xsl:attribute>
                                    </xsl:if>
                                    <xsl:if test="not(@img)">
                                        <xsl:attribute name="src">img/missing.jpg</xsl:attribute>
                                    </xsl:if>
                                </xsl:element>
                            </td>
                            <td>
                                <p>
                                    <strong>
                                        <xsl:value-of select="titre"/>
                                    </strong>
                                    (<xsl:value-of select="@date"/>)
                                </p>
                                <p>Réalisé par:
                                    <xsl:value-of select="@realisateur"/>
                                </p>
                                <p>Personnage interprété:
                                    <xsl:value-of select="@personnage"/>
                                </p>
                                <p>
                                    <xsl:if test="resume != ''">Résumé :<xsl:value-of select="resume"/>
                                    </xsl:if>
                                </p>
                                <p>
                                    <xsl:if test="alias != ''">
                                        <I>
                                            <xsl:value-of select="alias"/> (<xsl:value-of select="alias/@pays"/>,
                                            <xsl:value-of select="alias/@date"/>)
                                        </I>
                                    </xsl:if>
                                </p>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>

